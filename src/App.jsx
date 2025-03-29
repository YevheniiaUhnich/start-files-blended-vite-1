import BlogCard from './components/BlogCard/BlogCard';
// import Container from './components/Container/Container';
// import CryptoHistory from './components/CryptoHistory/CryptoHistory';
import ForbesList from './components/ForbesList/ForbesList';
// import Heading from './components/Heading/Heading';
// import Section from './components/Section/Section';
import Statistics from './components/Statistics/Statistics';
import article from './data/article.json';
import stats from './data/stats.json';
import forbes from './data/forbes.json';
import './App.css';

export const App = () => {
  return (
    <>
      <p className="task">Task-1</p>
      <BlogCard
        poster={article.poster}
        tag={article.tag}
        title={article.title}
        description={article.description}
        userName={article.name}
        avatar={article.avatar}
        postedAt={article.postedAt}
      />
      <p className="task">Task-2</p>
      <Statistics title="Main Statistics" stats={stats} />
      <p className="task">Task-3</p>
      <ForbesList list={forbes} />
      <p className="task">Task-4</p>
    </>
  );
};

export default App;
