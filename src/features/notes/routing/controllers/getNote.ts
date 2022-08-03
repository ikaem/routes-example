import { Request, Response } from 'express';
import { httpWrapper } from '../../../../../config/lib/axios/httpWrapper';
import { generateGetNoteApiRequestConfig } from '../../config/api-requests';
import { NoteNotFound } from '../../errors/noteNotFound';
import { Note } from '../../models/note';

export const getNote = async (
  req: Request<{}, {}, {}, { id: string }>,
  res: Response
) => {
  const { id } = req.query;

  const requestConfig = generateGetNoteApiRequestConfig(id);

  const { data } = await httpWrapper<Note>(requestConfig);

  if (!data) throw new NoteNotFound();

  res.status(200).send(data);
};
