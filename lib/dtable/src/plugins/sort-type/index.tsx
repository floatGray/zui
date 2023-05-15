import type {JSX} from 'preact';
import {definePlugin} from '../../helpers/shared-plugins';
import type {ColInfo} from '../../types/col';
import type {DTableWithPlugin, DTablePlugin} from '../../types/plugin';
import {formatString} from '@zui/helpers/src/format-string';

export type ColSortType = 'asc' | 'desc' | boolean;

export type DTableSortTypeTypes = {
    col: {
        sortType: ColSortType;
        sortLink?: string | ((this: DTableSortType, col: ColInfo, sortType: string, currentSortType: string) => string),
        sortAttrs?: JSX.HTMLAttributes | ((this: DTableSortType, col: ColInfo, sortType: string) => JSX.HTMLAttributes),
    },
    options: {
        sortLink?: string | ((this: DTableSortType, col: ColInfo, sortType: string, currentSortType: string) => string),
    }
};

export type DTableSortType = DTableWithPlugin<DTableSortTypeTypes>;

const sortTypePlugin: DTablePlugin<DTableSortTypeTypes> = {
    name: 'sort-type',
    onRenderHeaderCell(result, {col}) {
        const {sortType: sortTypeSetting} = col.setting;
        if (sortTypeSetting) {
            const {sortLink = this.options.sortLink, sortAttrs} = col.setting;
            const sortTypeName = sortTypeSetting === true ? 'none' : sortTypeSetting;
            result.push(
                <div className={`dtable-sort dtable-sort-${sortTypeName}`} />,
                {outer: true, attrs: {'data-sort': sortTypeName}},
            );
            if (sortLink) {
                const nextSortType = sortTypeName === 'asc' ? 'desc' : 'asc';
                const href = typeof sortLink === 'function' ? sortLink.call(this, col as ColInfo, nextSortType, sortTypeName) : formatString(sortLink, {...col.setting, sortType: nextSortType});
                result.push(
                    {tagName: 'a', attrs: {href, ...(typeof sortAttrs === 'function' ? sortAttrs.call(this, col as ColInfo, sortTypeName) : sortAttrs)}},
                );
                console.log('> ', col.name, {sortLink, nextSortType, sortTypeName, col});
            }
        }
        return result;
    },
};

export const sortType = definePlugin(sortTypePlugin, {buildIn: true});
