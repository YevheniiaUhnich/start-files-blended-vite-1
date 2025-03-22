import BlogCard from './components/BlogCard/BlogCard';
import Container from './components/Container/Container';
import CryptoHistory from './components/CryptoHistory/CryptoHistory';
import ForbesList from './components/ForbesList/ForbesList';
import Heading from './components/Heading/Heading';
import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import article from './data/article.json';

export const App = () => {
  return (
    <BlogCard
      poster={article.poster}
      tag={article.tag}
      title={article.title}
      description={article.description}
      userName={article.name}
      avatar={article.avatar}
      postedAt={article.postedAt}
    />
  );
};

export default App;
