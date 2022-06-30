import { writeFileSync } from "node:fs";
import generate from "@babel/generator";
import {
  addComment,
  callExpression,
  expressionStatement,
  file,
  identifier,
  objectPattern,
  objectProperty,
  program,
  stringLiteral,
  variableDeclaration,
  variableDeclarator,
} from "@babel/types";

import { ExtractedValues } from "./plugin";
import { serializer } from "./serialize";

export function outputWriter(filename: string, values: ExtractedValues): void {
  const { stylesheetCreateExpression } = serializer(values);

  const imports = variableDeclaration("const", [
    variableDeclarator(
      objectPattern([
        objectProperty(
          identifier("NativeWindStyleSheet"),
          identifier("NativeWindStyleSheet")
        ),
      ]),
      callExpression(identifier("require"), [stringLiteral("nativewind")])
    ),
  ]);

  addComment(
    imports,
    "leading",
    "This file was generated by NativeWind. Do not edit!"
  );

  const ast = file(
    program([imports, expressionStatement(stylesheetCreateExpression)])
  );

  writeFileSync(filename, generate(ast).code);
}
