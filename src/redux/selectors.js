import { createSelector } from '@reduxjs/toolkit';

export const selectContactsItems = state => state.contacts.items;
export const selectFilterName = state => state.filters.name;

export const selectFilteredContacts = createSelector(
    [selectContactsItems, selectFilterName],
    (items, name) => {
        const q = name.trim().toLowerCase();
        if (!q) return items;
        return items.filter(c => c.name.toLowerCase().includes(q));
    }
);
