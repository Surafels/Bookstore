const BookList = () => {
  const ListItem = [
    {
      id: 1,
      title: 'The Hunger Games',
      catagory: 'Action',
    },
    {
      id: 1,
      title: 'Dune',
      catagory: 'Science Fiction',
    }, {
      id: 3,
      title: 'Capital in the Twenty First Century',
      catagory: '',
    },
  ];
  return (
    <div>
      <ul>
        {ListItem.map((books) => (
          <li>{books.title}</li>

        ))}

      </ul>
      <ul />
    </div>
  );
};

export default BookList;