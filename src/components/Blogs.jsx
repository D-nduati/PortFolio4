import styles from './styles/Blogs.module.css';
function Blogs() {
  const posts = [
    {
      id: 1,
      title: 'Microservices Architecture: Breaking Down Monoliths',
      description: 'Learn how microservices can improve scalability and deployment flexibility compared to traditional monolithic architectures. We cover key principles, communication patterns, and when to consider this approach.',
      readMore: 'https://medium.theoremone.co/microservices-101-37f11cf3a500'
    },
    {
      id: 2,
      title: 'React Performance Optimization Techniques',
      description: 'Discover practical strategies to boost your React applications, including memoization, code splitting, lazy loading, and virtualization for large lists.',
      readMore: 'https://www.codementor.io/blog/react-optimization-5wiwjnf9hj'
    },
    {
      id: 3,
      title: 'REST vs GraphQL: Choosing the Right API Approach',
      description: 'A comprehensive comparison of REST and GraphQL APIs, examining use cases, performance considerations, and how to decide which fits your project needs.',
      readMore: 'https://www.howtographql.com/basics/1-graphql-is-the-better-rest/'
    },
    {
      id: 4,
      title: 'JWT Authentication Best Practices in Node.js',
      description: 'Implement secure authentication in your Node.js applications using JSON Web Tokens. We cover proper token handling, refresh strategies, and common security pitfalls to avoid.',
      readMore: 'https://jwt.io/introduction'
    }
  ];


  return (
    <div className={styles.container}>  
      {posts.map(post => (
        <div key={post.id} className={styles.post}>  
          <h6>{post.title}</h6>
          <p>{post.description}</p>
          <a href={post.readMore} target='blank' className={styles.btn}> 
            {post.readMore ? 'Learn More →' : 'Coming Soon'}
          </a>
        </div>
      ))}
    </div>
  );
}

export default Blogs;