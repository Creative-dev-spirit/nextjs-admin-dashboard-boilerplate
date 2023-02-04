import { ComponentMeta, ComponentStory } from '@storybook/react'
import AdminTable, { IAdminTable } from './AdminTable'
import { mockAdminTableProps } from './AdminTable.mock'

export default {
    title: 'tables/AdminTable',
    component: AdminTable,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof AdminTable>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AdminTable> = (args) => (
    <AdminTable {...args} />
)

export const Base = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockAdminTableProps.base,
} as IAdminTable
