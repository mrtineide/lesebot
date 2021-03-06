import path from "path";
import dateFormat from "dateformat";

import { Quote } from "../types";
import { loadJson } from "../utils";

export const QUOTES_PATH = path.resolve(process.cwd(), "data/quotes.json");
export const ADDED_QUOTES_PATH = path.resolve(process.cwd(), "data/added_quotes.json");

export const loadQuotes = async (): Promise<Quote[]> => {
  return await loadJson(QUOTES_PATH);
};

export const loadAddedQuotes = async (): Promise<Quote[]> => {
  return await loadJson(ADDED_QUOTES_PATH);
};

export const loadMergedQuotes = async (): Promise<Quote[]> => {
  const q1 = await loadQuotes();
  const q2 = await loadAddedQuotes();

  return q1.concat(q2);
};

export const formatQuote = (quote: Quote): string => {
  const date = dateFormat(new Date(quote.date), "fullDate");

  return `${quote.quote} -- ${quote.author} (${date})`;
};
