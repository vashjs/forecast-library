import * as React from 'react'
import styles from './styles.module.css'

interface Props {
  id: string
}

export const OpportunityTable = ({ id }: Props) => {
  return (
    <div className={styles.root}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan={3}>ID: {id}</th>
          </tr>
          <tr>
            <th>Head 1</th>
            <th>Head 2</th>
            <th>Head 3</th>
          </tr>
        </thead>
        <tbody>
          <td>Data 1</td>
          <td>Data 2</td>
          <td>Data 3</td>
        </tbody>
      </table>
    </div>
  )
}
