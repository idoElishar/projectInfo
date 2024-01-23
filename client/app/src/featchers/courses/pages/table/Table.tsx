import styled from 'styled-components';


const Table = styled.table`
  border-collapse: collapse;
//   margin: 25px auto; 
  font-size: 0.9em;
  font-family: 'Alegreya SC', sans-serif; 
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15); 
  width: 20vw; 
//   height: 20%;
  margin-top: 4rem;

`;

const Thead = styled.thead`
  background-color: #009879;
  color: white;
  text-align: center; 
  font-family: 'Alegreya SC', sans-serif;
`;

const Th = styled.th`
  padding: 12px 15px; 
`;

const Tbody = styled.tbody``;

const Tr = styled.tr`
  border-bottom: 1px solid #dddddd;
  &:nth-of-type(even) {
    background-color: #f3f3f3;
  }
  &:last-of-type {
    border-bottom: 2px solid #009879;
  }
`;

const Td = styled.td`
  padding: 12px 15px; 
  text-align: center; 
`;



const StudentsTable = () => {
    return (
        <Table >
            <Thead>
                <tr>
                    <Th>Students in course</Th>
                </tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>alice David</Td>
                </Tr>
                <Tr>
                    <Td>Bob David</Td>
                </Tr>
                <Tr>
                    <Td>Bibi David</Td>
                </Tr>
                <Tr>
                    <Td>Beni David</Td>
                </Tr>
                <Tr>
                    <Td>alicet David</Td>
                </Tr>
                <Tr>
                    <Td>alicee David</Td>
                </Tr>
                <Tr>
                    <Td>alico David</Td>
                </Tr>
                <Tr>
                    <Td>alicer David</Td>
                </Tr>
                <Tr>
                    <Td>alice David</Td>
                </Tr>
            </Tbody>
        </Table>
    );
}

export default StudentsTable;
