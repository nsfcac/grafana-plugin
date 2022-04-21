import { DataQuery, DataSourceJsonData } from '@grafana/data';

export interface MyQuery extends DataQuery {
  queryText?: string;
  // constant?: number;
  type: 'metrics'|'node_core'|'jobs',
  metric?: string;
  users?: string|string[],
  nodes?: string|string[],
  jobs?: string|string[]
}

export const defaultQuery: Partial<MyQuery> = {
  type: 'metrics'
  // users: [],
  // nodes: [],
  // jobs: [],
  // metrics: []
};

/**
 * These are options configured for each DataSource instance
 */
export interface MyDataSourceOptions extends DataSourceJsonData {
  path?:string
}

/**
 * Value that is used in the backend, but never sent over HTTP to the frontend
 */
export interface MySecureJsonData {
  apiKey?: string;
}

export interface VariableQuery {
  query: string;
  format: 'string' | 'json';
}
