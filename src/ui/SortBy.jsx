/* eslint-disable react/prop-types */
import React from 'react'
import Select from './Select'
import { useSearchParams } from 'react-router-dom'

export default function SortBy({ options }) {
    const [searchParams, setSearchParams] = useSearchParams()
    const sortBy = searchParams.get('sortBy') || ''

    const handleChange = (e) => {
        searchParams.set('sortBy', e.target.value)
        setSearchParams(searchParams)
    }

    return (
        <Select
            onChange={handleChange}
            options={options}
            type="white"
            value={sortBy}
        />
    )
}
