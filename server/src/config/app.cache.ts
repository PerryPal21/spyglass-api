import {
    AccountBalanceDto,
    AccountDistributionStatsDto,
    KnownAccountDto,
    MonitoredRepresentativeDto,
} from '@app/types';

export type AppCache = {
    /** Graph data for distribution. */
    accountDistributionStats: AccountDistributionStatsDto;

    /** A map of hash to unix timestamp for blocks that occurred prior to this node's sync date. */
    historicHashes: Map<string, number>;

    /** Accounts with an alias. */
    knownAccounts: Array<KnownAccountDto>;

    /** Representatives that run the Nano Node Monitor software (or some variant). */
    monitoredReps: Array<MonitoredRepresentativeDto>;

    /** Keeps track of how many pings a representative has been offline for. */
    offlinePingsMap: Map<string, number>;

    /** Online representatives. */
    onlineRepresentatives: string[];

    /** Online representatives, sorted by weight. */
    onlineRepresentativesWithWeights: { address: string, weight: number}[];

    /** Top holders, sorted by balance. */
    richList: AccountBalanceDto[];
};

export const AppCache: AppCache = {
    accountDistributionStats: undefined,
    historicHashes: new Map<string, number>(),
    knownAccounts: [],
    monitoredReps: [],
    offlinePingsMap: new Map<string, number>(),
    onlineRepresentatives: [],
    onlineRepresentativesWithWeights: [],
    richList: [],
};
