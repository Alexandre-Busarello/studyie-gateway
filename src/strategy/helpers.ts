interface FunctionOptionsType {
  paramsTypes: Array<string>
}

export function getParamsByReq(req: any, options: FunctionOptionsType): any {
  const params = {};
  if (options?.paramsTypes.find(item => item === 'BODY')) {
    params['body'] = req.body;
  }
  if (options?.paramsTypes.find(item => item === 'PARAMS')) {
    params['params'] = req.params;
  }
  if (options?.paramsTypes.find(item => item === 'QUERY')) {
    params['query'] = req.query;
  }
  return params;
}

export async function makeRequestWithParams(route: any, params: any, headers?: any): Promise<any> {
  if (params.body && params.params) {
    return await route.method(params.params, params.body, headers);
  }
  if (params.body) {
    return await route.method(params.body, headers);
  }
  if (params.query && params.params) {
    return await route.method(params.params, params.query, headers);
  }
  if (params.query) {
    return await route.method(params.query, headers);
  }
  if (params.params) {
    return await route.method(params.params, headers);
  }
  return await route.method(headers)
}
