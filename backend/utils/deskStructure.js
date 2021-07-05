// /deskStructure.js
import S from "@sanity/desk-tool/structure-builder";

import React from "react";

const JsonPreview = ({ document }) => (
  <>
    <h1>JSON Data for "{document.displayed.title}"</h1>
    <pre>{JSON.stringify(document.displayed, null, 2)}</pre>
  </>
);

export const getDefaultDocumentNode = ({ documentId, schemaType }) => {
  if (schemaType === "article" || documentId === "homePage" || documentId === "header") {
    return S.document().views([
      S.view.form(),
      S.view.component(JsonPreview).title("JSON"),
    ]);
  }
};

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Main")
        .child(
          S.list()
            .title("Main Documents")
            .items([
              S.listItem()
                .title("Header")
                .child(S.document().title("Home Page").schemaType("header").documentId("header")),
              S.listItem()
                .title("Home Page")
                .child(
                  S.document().title("Home Page").schemaType("homePage").documentId("homePage")
                ),
            ])
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !["header", "homePage"].includes(listItem.getId())
      ),
    ]);
