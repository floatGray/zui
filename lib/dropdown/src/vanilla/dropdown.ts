import {$, h} from '@zui/core';
import {Popover, PopoverPanelOptions} from '@zui/popover';
import {DropdownMenu} from '../component';
import type {DropdownOptions, DropdownMenuOptions} from '../types';

const TOGGLE_SELECTOR = '[data-toggle="dropdown"]';

export class Dropdown<O extends DropdownOptions = DropdownOptions> extends Popover<O> {
    static NAME = 'Dropdown';

    static DEFAULT: Partial<DropdownOptions> = {
        ...Popover.DEFAULT,
        name: 'dropdown',
        placement: 'bottom-start',
        arrow: false,
        closeBtn: false,
        animation: 'fade',
    };

    protected _getMenuOptions(): DropdownMenuOptions {
        let {items = []} = this.options;
        if (typeof items === 'function') {
            items = items(this);
        }
        return {
            items,
            nestedTrigger: 'hover',
            placement: this.options.placement,
            popup: false,
            ...this.options.menu,
        };
    }

    protected _getRenderOptions(): PopoverPanelOptions {
        return {
            ...super._getRenderOptions(),
            contentClass: '',
            content: h(DropdownMenu, this._getMenuOptions()),
        };
    }

    protected _onClickDoc = (event: MouseEvent) => {
        if (!$(event.target as HTMLElement).closest('.not-hide-menu').length) {
            this.hide();
        }
    };
}


$(document).on(`click${Dropdown.NAMESPACE} mouseenter${Dropdown.NAMESPACE}`, TOGGLE_SELECTOR, (event: MouseEvent) => {
    const $toggleBtn = $(event.currentTarget as HTMLElement);
    if ($toggleBtn.length && !$toggleBtn.data(Dropdown.KEY)) {
        const trigger = $toggleBtn.data('trigger') || 'click';
        const eventForTrigger = event.type === 'mouseover' ? 'hover' : 'click';
        if (eventForTrigger !== trigger) {
            return;
        }
        const options: DropdownOptions = {
            ...$toggleBtn.data(),
            show: true,
            triggerEvent: event,
        };
        if (!options.target && $toggleBtn.is('a')) {
            const href = $toggleBtn.attr('href') as string;
            if (href && '#0'.includes(href[0])) {
                options.target = href;
            }
        }
        if (!options.target && !options.items && !options.menu) {
            options.target = $toggleBtn.next('.dropdown-menu');
        }
        (Dropdown as typeof Popover).ensure($toggleBtn, options);
        event.preventDefault();
    }
});
