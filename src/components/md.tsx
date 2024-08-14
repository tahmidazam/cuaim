import "@/css/md.css";
import em from "@/utils/em";
import rem from "@/utils/rem";
import round from "@/utils/round";
import {
  Blockquote,
  Code,
  Heading,
  Link as RadixLink,
  Text,
} from "@radix-ui/themes";
import { Responsive } from "@radix-ui/themes/props";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import remarkGfm from "remark-gfm";

/**
 * The props for the `Md` component.
 */
export interface MdProps {
  source: string;
  size?:
    | Responsive<"1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9">
    | undefined;
}

/**
 * Render markdown content from a string source.
 * @param param0 The string source and size.
 * @returns The rendered markdown.
 */
export default async function Md({ source, size }: MdProps) {
  return (
    <div className="md">
      <MDXRemote
        source={source}
        options={{
          mdxOptions: {
            rehypePlugins: [],
            remarkPlugins: [remarkGfm],
          },
        }}
        components={{
          a: (props) =>
            props.href && (
              <RadixLink asChild size={size}>
                <Link href={props.href}>{props.children}</Link>
              </RadixLink>
            ),
          p: (props) => (
            <Text as="p" mb={em(20, 16)} mt={em(20, 16)} size={size}>
              {props.children}
            </Text>
          ),
          blockquote: (props) => (
            <Blockquote size={size}>{props.children}</Blockquote>
          ),
          ul: (props) => (
            <ul
              style={{
                marginTop: em(16, 14),
                marginBottom: em(16, 14),
                paddingInlineStart: em(22, 14),
                listStyleType: "disc",
              }}
            >
              {props.children}
            </ul>
          ),
          ol: (props) => (
            <ol
              style={{
                marginTop: em(16, 14),
                marginBottom: em(16, 14),
                paddingInlineStart: em(22, 14),
                listStyleType: "decimal",
              }}
            >
              {props.children}
            </ol>
          ),
          li: (props) => (
            <li
              style={{
                marginTop: em(4, 14),
                marginBottom: em(4, 14),
              }}
            >
              {props.children}
            </li>
          ),
          pre: (props) => (
            <pre
              style={{
                fontSize: em(12, 14),
                lineHeight: round(20 / 12),
                marginTop: em(20, 12),
                marginBottom: em(20, 12),
                borderRadius: rem(4),
                paddingTop: em(8, 12),
                paddingInlineEnd: em(12, 12),
                paddingBottom: em(8, 12),
                paddingInlineStart: em(12, 12),
                backgroundColor: "var(--gray-2)",
              }}
            >
              {props.children}
            </pre>
          ),
          code: (props) => (
            <Code size={size} variant="ghost">
              {props.children}
            </Code>
          ),
          h1: (props) => (
            <Heading
              as="h1"
              style={{
                fontSize: em(36, 16),
                marginTop: "0",
                marginBottom: em(32, 36),
                lineHeight: round(40 / 36),
              }}
            >
              {props.children}
            </Heading>
          ),
          h2: (props) => (
            <Heading
              as="h2"
              style={{
                fontSize: em(24, 16),
                marginTop: em(48, 24),
                marginBottom: em(24, 24),
                lineHeight: round(32 / 24),
              }}
            >
              {props.children}
            </Heading>
          ),
          h3: (props) => (
            <Heading
              as="h3"
              style={{
                fontSize: em(20, 16),
                marginTop: em(32, 20),
                marginBottom: em(12, 20),
                lineHeight: round(32 / 20),
              }}
            >
              {props.children}
            </Heading>
          ),
          h4: (props) => (
            <Heading
              as="h3"
              style={{
                marginTop: em(24, 16),
                marginBottom: em(8, 16),
                lineHeight: round(24 / 16),
              }}
            >
              {props.children}
            </Heading>
          ),
        }}
      />
    </div>
  );
}
