import styles from './AdminTable.module.css'

export interface IAdminTable {
    exampleStringProp: string
}

const AdminTable: React.FC<IAdminTable> = ({ exampleStringProp }) => {
    return <div className={styles.container}>{exampleStringProp}</div>
}

export default AdminTable
