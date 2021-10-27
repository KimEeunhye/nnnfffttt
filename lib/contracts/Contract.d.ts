import { BigNumber } from "@ethersproject/bignumber";
import EventContainer from "eventcontainer";
export default abstract class Contract extends EventContainer {
    address: string;
    private abi;
    private walletContract;
    private contract;
    constructor(address: string, abi: any);
    private findMethodABI;
    loadExtWalletContract(): Promise<any>;
    protected runMethod(methodName: string, ...params: any[]): Promise<any>;
    protected runWalletMethod(methodName: string, ...params: any[]): Promise<void>;
    protected runWalletMethodWithLargeGas(methodName: string, ...params: any[]): Promise<void>;
    protected runWalletMethodWithValue(value: BigNumber, methodName: string, ...params: any[]): Promise<void>;
}
//# sourceMappingURL=Contract.d.ts.map