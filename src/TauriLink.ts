import { ApolloLink } from '@apollo/client';
import { createTauriLink } from './createTauriLink';
import { invoke } from "@tauri-apps/api/tauri"

export interface TauriLinkOptions {
  invoke: typeof invoke;
}


export class TauriLink extends ApolloLink {
  constructor(public options: TauriLinkOptions) {
    super(createTauriLink(options).request);
  }
}