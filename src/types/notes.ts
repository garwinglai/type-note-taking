export type Note = {
  id: string;
} & NoteData;

export type NoteData = {
  title: string;
  body: string;
  tags: Tags[];
};

export type Tags = {
  id: string;
  label: string;
};
