import { envVars } from '../../../../config/helpers/envVars';
import { RequestConfig } from '../../../../config/lib/axios/types';

export const generateGetNoteApiRequestConfig = (
  noteId: string
): RequestConfig => ({
  // TODO has to be uppercase always
  method: 'GET',
  url: `${envVars.DB_URL}/note/${noteId}`,
});
