import { ApolloLink, FetchResult } from '@apollo/client';
import { TauriLinkOptions } from './TauriLink';
import { Observable } from "@apollo/client";
import { print } from "graphql";

export const createTauriLink = (options: TauriLinkOptions) => {
  return new ApolloLink(operation => {

    return new Observable(observer => {
      const invokeFunction = options.invoke;

      // operation = {...operation, query: print(operation.query)} as any;
      // operation.query = print(operation.query) as any;
      invokeFunction("graphql", { operation: { ...operation, query: print(operation.query) } }).then((response) => {
        operation.setContext({ response });
        observer.next(response as FetchResult);
        observer.complete();
      })
    });
  });
};