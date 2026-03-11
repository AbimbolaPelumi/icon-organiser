"use strict";
figma.showUI(__html__, { width: 320, height: 420, title: "Icon Sorter" });
function getFrame() {
    const node = figma.currentPage.selection[0];
    if (!node) {
        figma.ui.postMessage({ type: "error", message: "No frame selected. Select a frame and try again." });
        return null;
    }
    if (node.type !== "FRAME") {
        figma.ui.postMessage({ type: "error", message: `Selected node is a ${node.type}. Please select a FRAME.` });
        return null;
    }
    return node;
}
figma.ui.onmessage = (msg) => {
    var _a;
    if (msg.type === "sort") {
        const frame = getFrame();
        if (!frame)
            return;
        const children = [...frame.children];
        children.sort((a, b) => a.name.localeCompare(b.name));
        children.forEach((child, i) => frame.insertChild(i, child));
        figma.ui.postMessage({ type: "sort-done", count: children.length });
    }
    if (msg.type === "scan") {
        const frame = getFrame();
        if (!frame)
            return;
        const nameMap = new Map();
        for (const child of frame.children) {
            nameMap.set(child.name, ((_a = nameMap.get(child.name)) !== null && _a !== void 0 ? _a : 0) + 1);
        }
        const duplicates = [...nameMap.entries()]
            .filter(([, count]) => count > 1)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => a.name.localeCompare(b.name));
        figma.ui.postMessage({ type: "scan-done", duplicates, total: frame.children.length });
    }
    if (msg.type === "close") {
        figma.closePlugin();
    }
};
