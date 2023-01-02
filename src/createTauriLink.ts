import { ApolloLink, FetchResult } from '@apollo/client/core';
import { TauriLinkOptions } from './TauriLink';
import {Observable} from "@apollo/client/utilities";
import { readJsonBody } from '@apollo/client/link/http/parseAndCheckHttpResponse';
import {print} from "graphql";
export const createTauriLink = (options: TauriLinkOptions) => {
    return new ApolloLink(operation => {
        
        return new Observable(observer => {
          // Prefer linkOptions.fetch (preferredFetch) if provided, and otherwise
          // fall back to the *current* global window.fetch function (see issue
          // #7832), or (if all else fails) the backupFetch function we saved when
          // this module was first evaluated. This last option protects against the
          // removal of window.fetch, which is unlikely but not impossible.
          const invokeFunction = options.invoke;

          // operation = {...operation, query: print(operation.query)} as any;
          // operation.query = print(operation.query) as any;
          console.log("Invoking graphql with ", operation);
          invokeFunction("graphql", {operation: {...operation, query:print(operation.query)}}).then((response: Response) => {
            operation.setContext({ response });
            console.log(response);
            
            observer.next(response as FetchResult);
            observer.complete();
            
            // const myResponse = {text: JSON.stringify(response)}
            //   return readJsonBody(myResponse, operation, observer);
            
          })
        });
    });
};