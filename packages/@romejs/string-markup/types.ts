/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {BaseTokens, SimpleToken, ValueToken} from "@romejs/parser-core";
import {Dict} from "@romejs/typescript-helpers";
import {AbsoluteFilePath} from "@romejs/path";
import {UserConfig} from "@romejs/core/common/userConfig";

export type Tokens = BaseTokens & {
	Text: ValueToken<"Text", string>;
	Slash: SimpleToken<"Slash">;
	Less: SimpleToken<"Less">;
	Equals: SimpleToken<"Equals">;
	Greater: SimpleToken<"Greater">;
	Word: ValueToken<"Word", string>;
	String: ValueToken<"String", string>;
};

//
export type TextNode = {
	type: "Text";
	value: string;
};

export type TagAttributes = Dict<undefined | string>;

export type TagNode = {
	type: "Tag";
	name: MarkupTagName;
	attributes: TagAttributes;
	children: Children;
};

export type ChildNode = TextNode | TagNode;

export type Children = Array<ChildNode>;

export type MarkupTagName =
	| "token"
	| "hr"
	| "pad"
	| "grammarNumber"
	| "command"
	| "inverse"
	| "dim"
	| "emphasis"
	| "number"
	| "hyperlink"
	| "filelink"
	| "duration"
	| "filesize"
	| "italic"
	| "underline"
	| "strike"
	| "error"
	| "success"
	| "warn"
	| "info"
	| "highlight"
	| "color"
	| "table"
	| "tr"
	| "td"
	| "nobr"
	| "ol"
	| "ul"
	| "li";

export type MarkupFormatFilenameNormalizer = (filename: string) => string;

export type MarkupFormatFilenameHumanizer = (
	filename: string,
) => undefined | string;

export type MarkupFormatOptions = {
	userConfig?: UserConfig;
	normalizeFilename?: MarkupFormatFilenameNormalizer;
	humanizeFilename?: MarkupFormatFilenameHumanizer;
	cwd?: AbsoluteFilePath;
};

export type MarkupFormatGridOptions = MarkupFormatOptions & {
	columns?: number;
};

export type MarkupFormatNormalizeOptions = MarkupFormatOptions & {
	stripPositions?: boolean;
};

export type MarkupLinesAndWidth = {
	width: number;
	lines: Array<string>;
};

export type GridOutputFormat = "ansi" | "html" | "none";

export type MarkupTokenType =
	| "keyword"
	| "number"
	| "regex"
	| "string"
	| "comment"
	| "operator"
	| "punctuation"
	| "variable"
	| "attr-name"
	| "function"
	| "boolean";

export type MarkupColor =
	| "black"
	| "brightBlack"
	| "red"
	| "brightRed"
	| "green"
	| "brightGreen"
	| "yellow"
	| "brightYellow"
	| "blue"
	| "brightBlue"
	| "magenta"
	| "brightMagenta"
	| "cyan"
	| "brightCyan"
	| "white"
	| "brightWhite";
