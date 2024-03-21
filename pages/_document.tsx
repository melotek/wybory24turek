import theme, { notoSans } from "@/ui/config/theme";
import {
  DocumentHeadTags,
  DocumentHeadTagsProps,
  documentGetInitialProps,
} from "@mui/material-nextjs/v14-pagesRouter";
import {
  DocumentContext,
  DocumentProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

export default function MyDocument(
  props: DocumentProps & DocumentHeadTagsProps,
) {
  return (
    <Html lang="en" className={notoSans.className} style={{}}>
      <Head>
        {/* PWA primary color */}
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="emotion-insertion-point" content="" />
        <DocumentHeadTags {...props} />
      </Head>
      <body
        style={{
          background:
            "linear-gradient(180deg, rgba(34,45,102, .125), rgb(243,246,251), rgb(243,246,251))",
          backgroundBlendMode: "screen",
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
