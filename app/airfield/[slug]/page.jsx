import Head from "next/head";
import Link from "next/link";
import path from "path";
import getAllFilesIds from "../../../lib/getAllFilesIds";
import parseMarkdownFile from "../../../lib/parseMarkdownFile";

const memoryDirectory = path.join(process.cwd(), "data", "airfield");

export function getStaticPaths() {
  const paths = getAllFilesIds(memoryDirectory).map((path) => ({
    params: { slug: path },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const fileData = await parseMarkdownFile(
    path.join(memoryDirectory, `${params.slug}.md`)
  );

  return {
    props: {
      allMemoriesData: {
        html: fileData.html,
        title: fileData.meta.title,
        date: fileData.meta.date,
      },
    },
  };
}

export default function GovernmentPromises({ allMemoriesData }) {
  return (
    <>
      <Head>
        <title>
          {allMemoriesData.date}: {allMemoriesData.title}
        </title>
      </Head>

      <div>
        <Link
          href="/app/airfield"
          style={{
            position: "fixed",
            fontSize: "3em",
            margin: "-0.1em 0 0 -1em",
          }}>

            ↑

        </Link>
      </div>
      <time style={{ display: "block", margin: "0 0 1em 0", fontSize: "3em" }}>
        {allMemoriesData.date}
      </time>

      <article>
        <div dangerouslySetInnerHTML={{ __html: allMemoriesData.html }} />
      </article>
    </>
  );
}
