export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body style={{backgroundColor:'black'}}>
        <h1 style={{
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold', fontSize:'50px'
    }}>MY NEXT TODO APP</h1>
        {children}
      </body>
    </html>
  );
}
