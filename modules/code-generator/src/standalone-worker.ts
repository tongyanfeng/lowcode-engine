/* eslint-disable no-console */
import type { IPublicTypeProjectSchema } from '@alilc/lowcode-types';
import CodeGen from './standalone';

declare const self: any;

self.onmessage = (event: any) => {
  const msg = event.data || {};
  if (msg.type === 'run') {
    run(msg);
  }
  if (msg.type === "zip") {
    zip(msg);
  }
};

self.postMessage({ type: 'ready' });

async function run(msg: { solution: string; schema: IPublicTypeProjectSchema; flattenResult?: boolean }) {
  try {
    print('begin run...');
    self.postMessage({ type: 'run:begin' });

    const { solution } = msg;
    if (!solution) {
      throw new Error('solution is required');
    }
    console.log(28, solution);
    
    const createAppBuilder = CodeGen.solutions[solution as 'icejs' | 'rax' | 'nextjs' | 'nextjsPage'];
    if (typeof createAppBuilder !== 'function') {
      throw new Error(`solution '${solution}' is invalid`);
    }

    const appBuilder = createAppBuilder();

    print('generating from schema: %o', msg.schema);

    const result = await appBuilder.generateProject(msg.schema);

    print('generated result: %o', result);

    const finalResult = msg.flattenResult
      ? CodeGen.utils.resultHelper.flattenResult(result)
      : result;
    console.log(42, finalResult);

    if (msg.flattenResult) {
      print('flatten result: %o', finalResult);
    }

    self.postMessage({
      type: 'run:end',
      result: finalResult,
    });
  } catch (e) {
    printErr(`${e}`);
    self.postMessage({
      type: 'run:error',
      errorMsg: `${(e as Error | null)?.message || e}`,
      errorDetail: `${e}`,
    });
  }
}

function print(text: string, ...args: any[]) {
  console.debug(`[code-generator/worker]: ${text}`, ...args);
  self.postMessage({
    type: 'stdout',
    data: text,
    args,
  });
}

function printErr(text: string, ...args: any[]) {
  console.debug(`[code-generator/worker]: %c${text}`, 'color:red', ...args);
  self.postMessage({
    type: 'stderr',
    data: text,
    args,
  });
}

async function zip(msg: { project: any, outputPath: string }) {
  try {
    print('begin zip...');
    self.postMessage({ type: 'zip:begin' });

    // 写入到 zip 包
    const zip = await CodeGen.publishers.zip().publish({
      project: msg.project, // 上一步生成的 project
      outputPath: msg.outputPath, // 输出目录: '/path/to/your/output/dir'
      projectSlug: 'your-project', // 项目标识 -- 对应生成 your-project-slug.zip 文件
    });
    console.log('94 standalone-worker: ', zip);
    
    self.postMessage({
      type: 'zip:end',
      msg: 'success',
      result: zip
    });
  } catch (e) {
    console.log('100 standalone workers', e);
    
    printErr(`${e}`);
    self.postMessage({
      type: 'zip:error',
      errorMsg: `${(e as Error | null)?.message || e}`,
      errorDetail: `${e}`,
    });
  }
}