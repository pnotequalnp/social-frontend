import type { TextPost_text_post$key } from '../queries/__generated__/TextPost_text_post.graphql';
import { graphql, useFragment } from 'react-relay';

const textPostFragment = graphql`
  fragment TextPost_text_post on text_post {
    uuid
    content
  }
`;

type Props = {
  post: TextPost_text_post$key,
};

export function TextPost(props: Props) {
  const post = useFragment(textPostFragment, props.post);

  return <div>
    {post.content}
    {post.uuid}
  </div>;
}
