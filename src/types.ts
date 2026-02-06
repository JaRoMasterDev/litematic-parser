export interface Litematic {
    MinecraftDataVersion: number;
    Version: number;
    Metadata: Metadata;
    Regions: { [regionName: string]: Region };
    SubVersion: number;
}

export interface Metadata {
    TimeCreated: number[];
    TimeModified: number[];
    EnclosingSize: EnclosingSize;
    Description: string;
    RegionCount: number;
    TotalBlocks: number;
    Author: string;
    TotalVolume: number;
    Name: string;
}

export interface EnclosingSize {
    x: number;
    y: number;
    z: number;
}

export interface Region {
    BlockStates: Array<number[]>;
    PendingBlockTicks: any[];
    Position: EnclosingSize;
    BlockStatePalette: BlockStatePalette[];
    Size: EnclosingSize;
    PendingFluidTicks: any[];
    TileEntities: TileEntity[];
    Entities: any[];
}

export interface BlockStatePalette {
    Name: string;
    Properties?: Properties;
}

export interface Properties {
    mode?: string;
    powered?: string;
    facing?: string;
    orientation?: string;
    triggered?: string;
    crafting?: string;
    level?: string;
    enabled?: string;
    east?: string;
    south?: string;
    north?: string;
    west?: string;
    power?: string;
}

export interface TileEntity {
    components: Components;
    x: number;
    y: number;
    z: number;
    id: string;
    OutputSignal?: number;
    crafting_ticks_remaining?: number;
    triggered?: number;
    disabled_slots?: any[];
    Items?: any[];
    TransferCooldown?: number;
}

export interface Components {
}