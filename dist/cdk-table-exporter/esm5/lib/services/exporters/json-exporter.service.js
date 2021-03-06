/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { FileExporter } from './file-exporter';
import { MIME_JSON } from '../../constants';
import * as i0 from "@angular/core";
var JsonExporterService = /** @class */ (function (_super) {
    tslib_1.__extends(JsonExporterService, _super);
    function JsonExporterService() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} rows
     * @param {?=} options
     * @return {?}
     */
    JsonExporterService.prototype.createContent = /**
     * @param {?} rows
     * @param {?=} options
     * @return {?}
     */
    function (rows, options) {
        return JSON.stringify(rows);
    };
    /**
     * @return {?}
     */
    JsonExporterService.prototype.getMimeType = /**
     * @return {?}
     */
    function () {
        return MIME_JSON;
    };
    JsonExporterService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    JsonExporterService.ctorParameters = function () { return []; };
    /** @nocollapse */ JsonExporterService.ngInjectableDef = i0.defineInjectable({ factory: function JsonExporterService_Factory() { return new JsonExporterService(); }, token: JsonExporterService, providedIn: "root" });
    return JsonExporterService;
}(FileExporter));
export { JsonExporterService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1leHBvcnRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY2RrLXRhYmxlLWV4cG9ydGVyLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2V4cG9ydGVycy9qc29uLWV4cG9ydGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7O0FBRTVDO0lBR3lDLCtDQUFxQjtJQUU1RDtlQUNFLGlCQUFPO0lBQ1QsQ0FBQzs7Ozs7O0lBRU0sMkNBQWE7Ozs7O0lBQXBCLFVBQXFCLElBQVcsRUFBRSxPQUFpQjtRQUNqRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7OztJQUNPLHlDQUFXOzs7SUFBbEI7UUFDQyxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOztnQkFkRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7Ozs4QkFSRDtDQXNCQyxBQWhCRCxDQUd5QyxZQUFZLEdBYXBEO1NBYlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJy4uLy4uL29wdGlvbnMnO1xuaW1wb3J0IHsgRmlsZUV4cG9ydGVyIH0gZnJvbSAnLi9maWxlLWV4cG9ydGVyJztcbmltcG9ydCB7IE1pbWUgfSBmcm9tICcuLi8uLi9taW1lJztcbmltcG9ydCB7IE1JTUVfSlNPTiB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEpzb25FeHBvcnRlclNlcnZpY2UgZXh0ZW5kcyBGaWxlRXhwb3J0ZXI8T3B0aW9ucz4ge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlQ29udGVudChyb3dzOiBhbnlbXSwgb3B0aW9ucz86IE9wdGlvbnMpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocm93cyk7XG4gIH1cbiAgIHB1YmxpYyBnZXRNaW1lVHlwZSgpOiBNaW1lIHtcbiAgICByZXR1cm4gTUlNRV9KU09OO1xuICB9XG5cbn1cbiJdfQ==