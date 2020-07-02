interface FunctionOptionsType {
  httpMethod: string,
  paramsTypes: Array<string>
}

export function getParamsByReq(req: any, options: FunctionOptionsType): any {
  const params = {};
  if (options.paramsTypes.find(item => item === 'BODY')) {
    params['body'] = req.body;
  }
  if (options.paramsTypes.find(item => item === 'PARAMS')) {
    params['params'] = req.params;
  }
  if (options.paramsTypes.find(item => item === 'QUERY')) {
    params['query'] = req.query;
  }
  return params;
}
