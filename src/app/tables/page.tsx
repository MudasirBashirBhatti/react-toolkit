import CompoundTable from "@/components/tables/CompoundTable/CompoundTable";
import Table from "@/components/tables/Table/Table";

const TablesPage = () => {
  return (
    <>
      <Table />
      {/* compound table */}
      <CompoundTable>
        <CompoundTable.Head>
          <CompoundTable.Row>
            <CompoundTable.Cell>Counts</CompoundTable.Cell>
            <CompoundTable.Cell>Name</CompoundTable.Cell>
            <CompoundTable.Cell>Link</CompoundTable.Cell>
          </CompoundTable.Row>
        </CompoundTable.Head>

        <CompoundTable.Body>
          {Array.from({ length: 8 }).map((_, index) => (
            <CompoundTable.Row key={index}>
              <CompoundTable.Cell label="Counts">1</CompoundTable.Cell>
              <CompoundTable.Cell label="Name">Mudasir</CompoundTable.Cell>
              <CompoundTable.Cell label="Link">
                <a href="https://google.com">Hello</a>
              </CompoundTable.Cell>
            </CompoundTable.Row>
          ))}
        </CompoundTable.Body>
      </CompoundTable>
    </>
  );
};

export default TablesPage;
