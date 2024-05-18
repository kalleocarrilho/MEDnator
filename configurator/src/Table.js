import rules from './mock/rules.json';
import React from 'react';

export function loadTable(setRule, setShowForm) {
    const tableContents = fetchRules(setRule, setShowForm)
    return (
        <table className='mt-3 mb-3 text-black border-collapse table-fixed w-full text-sm'>
            <thead>
                <tr>
                    <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>
                    Id
                    </th>
                    <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>
                    Field 1
                    </th>
                    <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>
                    Operator
                    </th>
                    <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>
                    Field 2
                    </th>
                    <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>
                    Motive
                    </th>
                    <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>
                    Recommendation
                    </th>
                    <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>
                    Priority
                    </th>
                    <th className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>
                    Action
                    </th>
                </tr>
            </thead>
            <tbody className='bg-white dark:bg-slate-800'>
                {tableContents}
                
            </tbody>
        </table>
    );
}

function fetchRules(setRule, setShowForm) {
    return rules.map(rule => {
        

        return (
            <tr>
                <td className='border-b text-left border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>
                    {rule.id}
                </td>
                <td className='border-b text-left border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>
                    {rule.field_1}
                </td>
                <td className='border-b text-left border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>
                    {rule.operator}
                </td>
                <td className='border-b text-left border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>
                    {rule.field_2}
                </td>
                <td className='border-b text-left border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>
                    {rule.reason}
                </td>
                <td className='border-b float-center border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>
                    <p className={'rounded-full text-white px-3 w-fit '+ (rule.recommendation === 'approve' ? 'bg-green-500': 'bg-red-500')}>{rule.recommendation}</p>
                </td>
                <td className='border-b text-left border-slate-100  dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>
                    {rule.priority}
                </td>
                <td className='border-b text-left border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400'>
                    <a data-item={JSON.stringify(rule)} id={"edit"+rule.id} onClick={(event) => {
                        setRule(JSON.parse(event.target.getAttribute('data-item')))
                        setShowForm(true)
                    }}>Edit</a>
                </td>
            </tr>
        )
    })
}