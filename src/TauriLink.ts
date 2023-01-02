import { ApolloLink, RequestHandler } from '@apollo/client/core';
import { createTauriLink } from './createTauriLink';

export interface TauriLinkOptions {
    invoke: any
}


export class TauriLink extends ApolloLink {
  constructor(public options: TauriLinkOptions) {
    super(createTauriLink(options).request);
  }
}