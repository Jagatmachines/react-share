import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './utils/createShareButton';

function twitterLink(url, { title, via, hashtags = [] }) {
  return 'https://twitter.com/share' + objectToGetParams({
    url,
    text: title,
    via,
    hashtags: hashtags.join(','),
  });
}

const TwitterShareButton = createShareButton('twitter', twitterLink, props => ({
  hashtags: props.hashtags,
  title: props.title,
  via: props.via,
}), {
  windowWidth: 550,
  windowHeight: 400,
});

export default TwitterShareButton;
