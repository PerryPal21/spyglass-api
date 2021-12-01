export type InsightsDto = {
    heightBalances?: Datapoint[];
    maxAmountReceivedHash: string;
    maxAmountReceivedBan: number;
    maxAmountSentHash: string;
    maxAmountSentBan: number;
    maxBalanceHash: string;
    maxBalanceBan: number;
    mostCommonSenderAddress: string;
    mostCommonSenderTxCount: number;
    mostCommonRecipientAddress: string;
    mostCommonRecipientTxCount: number;
    totalAmountReceivedBan: number;
    totalAmountSentBan: number;
    totalTxSent: number;
    totalTxReceived: number;
    firstInTxUnixTimestamp: number;
    firstInTxHash: string;
    firstOutTxUnixTimestamp: number;
    firstOutTxHash: string;
    lastInTxUnixTimestamp: number;
    lastInTxHash: string;
    lastOutTxUnixTimestamp: number;
    lastOutTxHash: string;
};

type Datapoint = {
    balance: number;
    height: number;
};
