import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
    const file = createResultFile(
        'utils',
        'ts',
        `
export const matchRouter = (accessProp: any, routesProp: any) => {
    let matchRoute = routesProp;
    let newList = [];
    for (let i = 0; i < matchRoute.length; i++) {
        let currentRoute = matchRoute[i];
        let currentAccess = currentRoute.access || undefined;
        if (typeof currentAccess === "string" && accessProp[currentAccess] || typeof currentAccess === "undefined") {
        let routesTmp = undefined;
        if (currentRoute.routes && currentRoute.routes.length > 0) {
            routesTmp = matchRouter(accessProp, currentRoute.routes)
            if (routesTmp && routesTmp.length > 0) {
            currentRoute.routes = routesTmp;
            newList.push(currentRoute)
            } else {
            delete currentRoute.routes
            }
        } else {
            newList.push(currentRoute)
        }
        }
    }
    return newList
    }
    export const isMatchPath = (path: string, routes: Array<any>): any => {
    let isMatch = '';
    
    for (let i = 0; i < routes.length; i++) {
        const routeItem = routes[i];
        if (path === routeItem.path) {
        isMatch = routeItem
        break
        }
        if (routeItem.routes?.length) {
        isMatch = isMatchPath(path, routeItem.routes)
        if (isMatch) {
            break;
        }
        }
    }
    return isMatch
    }
    export const hasRoleAuth = (roleList:any, auth:string):boolean => {
    return roleList.findIndex((item:string) => item === auth) > -1
    }
    export const authFilter = (list: Array<string>, auth: any) => {
    let tmp = {}
    for (let i of list) {
        tmp[i] = hasRoleAuth(auth, i)
    }
    return tmp;
    }        
    `,
    );

    return [['src', 'layout'], file];
}

