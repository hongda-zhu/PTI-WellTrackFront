import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

interface DynamicTableProps {
  data: Record<string, any>[]; // Array de objetos con claves dinámicas
}

export default function DynamicTable({ data }: DynamicTableProps) {
  if (data.length === 0) {
    return <p>No data available</p>;
  }

  // Obtener las claves del primer objeto como encabezados de columna
  const headers = Object.keys(data[0]);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          {headers.map((header) => (
            <TableHead key={header}>{header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {headers.map((header) => (
              <TableCell key={header}>{row[header]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}