import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  margin-left: auto;
  margin-right: 18vw;

`;

const Thead = styled.thead`
  background-color: #009879;
  color: white;
  text-align: left;
  font-family: Alegreya SC;
    font-style: normal;
    line-height: 1.2;
    text-transform: capitalize;
`;

const Th = styled.th`
  padding: 12px 15px;
`;

const Tbody = styled.tbody`
`;

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
                    <Td>alice David</Td>
                </Tr>
                <Tr>
                    <Td>alice David</Td>
                </Tr>
                <Tr>
                    <Td>alice David</Td>
                </Tr>
                <Tr>
                    <Td>alice David</Td>
                </Tr>
                <Tr>
                    <Td>alice David</Td>
                </Tr>
            </Tbody>
        </Table>
    );
}

export default StudentsTable;
