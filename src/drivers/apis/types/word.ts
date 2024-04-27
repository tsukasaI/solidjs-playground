export type Words = Word[];

export type Word = {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  meanings: Meaning[];
  license: License2;
  sourceUrls: string[];
};

export type Phonetic = {
  text: string;
  audio: string;
  sourceUrl: string;
  license: License;
};

export type License = {
  name: string;
  url: string;
};

export type Meaning = {
  partOfSpeech: string;
  definitions: Definition[];
  synonyms: string[];
  antonyms: any[];
};

export type Definition = {
  definition: string;
  synonyms: string[];
  antonyms: any[];
  example?: string;
};

export type License2 = {
  name: string;
  url: string;
};
