import { OnInit, OnChanges, SimpleChanges, OnDestroy, EventEmitter } from '@angular/core';
import { IMenuWing, MenuOptions } from './menu-options.service';
import { SpinService } from './menu-spin.service';
export declare class MenuWingComponent implements OnInit, OnChanges, OnDestroy {
    private menuOptions;
    private spinService;
    wing: IMenuWing;
    index: number;
    svgPath: string;
    menuState: boolean;
    position: string;
    textRotate: number;
    textAnchor: string;
    wingClicked: EventEmitter<IMenuWing>;
    private timeOutId;
    private scaleSize;
    private rotateDeg;
    private iconX;
    private iconY;
    private iconSize;
    constructor(menuOptions: MenuOptions, spinService: SpinService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onMouseOver(): void;
    onMouseOut(): void;
    onClick(): void;
    onPanStart(event: any): void;
    onRotate(event: any): void;
    onPanEnd(event: any): void;
    private clearTimer();
}