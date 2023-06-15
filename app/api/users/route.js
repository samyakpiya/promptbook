// http://localhost:3000/api/users

export async function GET(request) {
  // Handle get request for /api/users
  // Retrieve users from the database or any data source

  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "Bob Smith" },
  ];

  // Send the users a response
  return new Response(JSON.stringify(users));
}
