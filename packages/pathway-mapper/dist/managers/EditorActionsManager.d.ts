import { ILayoutProperties } from "../modals/LayoutProperties";
import { IProfileMetaData } from "../ui/react-pathway-mapper";
import CBioPortalAccessor from "../utils/CBioPortalAccessor";
import GenomicDataOverlayManager from "./GenomicDataOverlayManager";
export default class EditorActionsManager {
    static defaultLayoutProperties: ILayoutProperties;
    cy: any;
    genomicDataOverlayManager: GenomicDataOverlayManager;
    edgeEditing: any;
    selectedNodeStack: any;
    layoutProperties: ILayoutProperties;
    private FIT_CONSTANT;
    private observers;
    private svgExporter;
    private undoRedoManager;
    private isCbioPortal;
    private isCollaborative;
    private shareDBManager;
    private portalAccessor;
    private profiles;
    constructor(isCollaborative: boolean, shareDBManager: any, cyInst: any, isCBioPortal: boolean, undoRedoManager: any, portalAccessor: CBioPortalAccessor, profiles: IProfileMetaData[]);
    setProfile(index: number, profile: IProfileMetaData): void;
    addProfile(profile: IProfileMetaData): void;
    removeProfiles(): void;
    handleChangePositionByAlignment(movedNodeArr: any): void;
    doChangePosition(movedNodes: any): any[];
    undoChangePosition(movedNodes: any): any[];
    changeNodePositionsByArrows(selectedNodes: any): void;
    doChangeNodeSize(args: any): any;
    undoChangeNodeSize(args: any): any;
    doChangeCompoundSize(args: any): any;
    undoChangeCompoundSize(args: any): any;
    changeName(ele: any, newName: any): void;
    changeNameCy(ele: any, newName: any): void;
    doChangename(args: any): {
        ele: any;
        newName: any;
        oldName: any;
    };
    undoChangeName(args: any): {
        ele: any;
        newName: any;
        oldName: any;
    };
    hideSelectedNodes(): void;
    doHide(args: any): any;
    undoHide(args: any): any;
    showAllNodes(): void;
    doShow(args: any): any;
    undoShow(args: any): any;
    highlightElementsInitially(invalidHighlightedGenesIDs: string[], invalidGenesIDs: string[], highlightedGenesIDs: string[], highlightedEdgesIDs: string[], hiddenGenesIDs: string[]): void;
    validateGenes(): void;
    getGeneSymbols(): any[];
    highlightInvalidGenes(validGeneSymbols: any): void;
    removeInvalidGeneHighlights(actions: any[]): void;
    doHighlightInvalidGenes(args: any): any;
    undoHighlightInvalidGenes(args: any): any;
    highlightSelected(): void;
    highlightNeighbors(): void;
    highlightBySearch(args: any[]): void;
    removeOtherHighlight(actions: any[]): void;
    doHighlight(args: any): any;
    undoHighlight(args: any): any;
    removeAllHighlight(): void;
    postLayout(): void;
    getEmptyGroupID(): any;
    groupGenomicData(cancerNames: any[], groupID: string): void;
    addPubmedIDs(edge: any, pubmedIDs: number[]): void;
    removePubmedID(edge: any, pubmedIDs: number[]): void;
    updateEdgeAnchorPoints(edge: any): void;
    pushSelectedNodeStack(ele: any): void;
    removeElementFromSelectedNodeStack(ele: any): void;
    clearSelectedNodeStack(): void;
    exportSVG(): string;
    registerObserver(observer: any): void;
    notifyObservers(): void;
    registerGenomicDataObserver(observer: any): void;
    updateGenomicDataVisibility(dataMap: any): void;
    getGlobalOptions(): {
        zoomLevel: any;
        panLevel: any;
    };
    changeGlobalOptions(op: any): void;
    updateGlobalOptions(newOptions: any): void;
    saveLayoutProperties(newLayoutProps: any): void;
    updateLayoutPropertiesCallback(op: any): void;
    performLayout(): void;
    addNode(nodeData: any, posData: any): void;
    addNodes(nodes: any[]): void;
    addNodesCy(nodes: any[]): void;
    addNodetoCy(nodeData: any, posData: any): void;
    shareDBNodeAddRemoveEventCallBack(op: any): void;
    addNewNodeLocally(realtimeNode: any): void;
    addNewNodeToShareDB(nodeData: any, posData: any): void;
    addEdge(edgeData: any): void;
    addEdges(edges: any[]): void;
    addEdgesCy(edges: any[]): void;
    addNewEdgeShareDB(edgeData: any): void;
    addNewEdgetoCy(edgeData: any): void;
    shareDBEdgeAddRemoveEventCallBack(op: any): void;
    addNewElementsLocally(realTimeNodeArray: any[], realTimeEdgeArray: any[]): void;
    addNewEdgeLocally(edge: any): void;
    reconnectEdge(sourceID: string, targetID: string, edgeData: any): any;
    reconnectEdgeInShareDB(sourceID: string, targetID: string, edgeData: any): void;
    removeElement(ele: any): void;
    removeElementCy(ele: any): void;
    removeElementsCy(ele: any): void;
    removeElementsFromShareDB(eles: any[]): void;
    removeElementFromShareDB(ele: any): void;
    changeParents(eles: any[], newParentId: string): void;
    changeParentShareDB(eles: any, newParentId: string): void;
    changeParentCy(eles: any[], newParentId: string): void;
    moveElements(eles: any[]): void;
    resizeElements(ele: any): void;
    mergeGraph(nodes: any[], edges: any[]): void;
    mergeGraphCy(nodes: any[], edges: any[]): void;
    fitGraph(): void;
    loadFile(nodes: any[], edges: any[]): void;
    loadFileCy(nodes: any[], edges: any[]): void;
    loadfileShareDB(nodes: any[], edges: any[]): void;
    removeAllElements(): void;
    updateHighlight(ele: any, isHighlighted: boolean): void;
    updateVisibility(ele: any, isHidden: boolean): void;
    updateElementCallback(op: any): void;
    getGenomicDataSVG(node: any): any;
    getOncoprintDataSVG(node: any): any;
    removeGenomicData(): void;
    addGenomicData(genomicData: any): void;
    adjustVisibilityShareDB(profileId: string, isEnabled: boolean): void;
    addToProfiles(profileId: string): void;
    addPortalGenomicData(genomicData: any, groupID: any): void;
    shareDBGenomicDataHandler(op: any): void;
    shareDBGenomicDataGroupChangeHandler(op: any): void;
    shareDBGenomicDataVisibilityHandler(op: any): void;
    resizeNodesToContent(nodes: any[]): void;
}
