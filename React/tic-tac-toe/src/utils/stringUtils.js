import immutable from 'seamless-immutable';

export function stringArrayToObject(actionsArray, namespace) {
  if (actionsArray.some(actionName => !actionName || typeof actionName !== 'string')) {
    throw new Error('Action names must be strings and must not be empty');
  }
  return immutable(actionsArray).asObject(actionName => [
    actionName,
    namespace ? `${namespace}:${actionName}` : actionName
  ]);
}
