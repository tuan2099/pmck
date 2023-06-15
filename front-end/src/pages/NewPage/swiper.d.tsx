
declare module 'swiper' {
    export interface SwiperOptions {
        // Các tùy chọn của Swiper
        // ...
    }

    export class Swiper {
        constructor(container: HTMLElement | string, options?: SwiperOptions);
        // Phương thức và thuộc tính của Swiper
        // ...
    }

    export interface AutoplayOptions {
        delay?: number;
        disableOnInteraction?: boolean;
        stopOnLastSlide?: boolean;
        reverseDirection?: boolean;
    }

    export class Autoplay {
        constructor(options?: AutoplayOptions);
        // Các phương thức và thuộc tính khác cho Autoplay
        // ...
    }


    // Thêm khai báo cho thành viên 'Pagination'
    export interface PaginationOptions {
        el: string | HTMLElement;
        type?: 'bullets' | 'fraction' | 'progressbar' | 'custom';
        clickable?: boolean;
        dynamicBullets?: boolean;
        dynamicMainBullets?: number;
        renderBullet?: (index: number, className: string) => string;
        renderFraction?: (currentClass: string, totalClass: string) => string;
        renderProgressbar?: (progressbarFillClass: string) => string;
        renderCustom?: (swiper: Swiper, current: number, total: number) => string;
    }
    export class Pagination {
        constructor(options?: PaginationOptions);
    }
}
