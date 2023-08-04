import {
  createClient,
} from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { PortableText as PortableTextComponent } from "@portabletext/react";
import { config } from "./config";

if (!config.projectId) {
  throw Error(
    "The Project ID is not set. Check your environment variables."
  );
}
export const urlFor = source =>
  createImageUrlBuilder(config).image(source);

export const imageBuilder = source =>
  createImageUrlBuilder(config).image(source);

const components = {
  marks: {
    center: props => (
      <div className="text-center">{props.children}</div>
    ),
    highlight: props => (
      <span className="font-bold text-brand-primary">
        {props.children}
      </span>
    ),
    link: ({children, value}) => {
      const { blank, href } = value
      return blank ? 
        <a href={href} target="_blank" rel="noreferrer">{children}</a>
        : <a href={href}>{children}</a>
    },
    internalLink: ({value, children}) => {
      const {slug = {}} = value
      const href = `/blog/${slug.current}`
      return <a href={href} target="_blank" rel="noreferrer">{children}</a>
    },
  }
};
// Set up Portable Text serialization
export const PortableText = props => (
  <PortableTextComponent components={components} {...props} />
);

export const client = createClient(config);

export const previewClient = createClient({
  ...config,
  useCdn: false
});

export const getClient = usePreview =>
  usePreview ? previewClient : client;
export default client;