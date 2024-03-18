import { Metadata } from "next"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Chart } from "@/components/analytics/chart"
import { CalendarDateRangePicker } from "@/components/date-range-picker"
import { MainNav } from "@/components/main-nav"
// import { Overview } from "@/components/overview"
import { RecentSales } from "@/components/recent-sales"
import { Search } from "@/components/search"
// import TeamSwitcher from "@/dashboard/components/team-switcher"
import { UserNav } from "@/components/user-nav"
import { YearSelect } from "@/components/year-select"
// import { 
//   ChatBot,
//   BotResponseArea,
//   QueryAreaWithButton,
//   ChatQuery
// } from "@/components/chat-bot"
import ChatQuery from "@/components/chat-query"
import { BotResponse } from "@/components/chat-response"
import { ChatComponent } from "@/components/chat-bot"
import { Table2021 } from "@/components/table_2021"
import { MarketTypeSelect } from "@/components/market-type-select"
import Link from "next/link"
import TopBrokerTableMain from "@/components/top-broker-table"
import TableOptionsForm from "@/components/broker-table-dash/page"
// import { useState, ChangeEvent } from "react"
import Top10Brokers from "@/components/broker-table-dash/page"
import TotalGWPAndPlannedGWPChart from "@/components/analytics/chart"
import { PieChart2021, PieChart2022 } from "@/components/analytics/pie-chart"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
}

export default function DashboardPage() {
//   const [inputValue, setInputValue] = useState('');

//   const handleChatInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setInputValue(e.target.value);
//   };

//   const handleChatSubmitClick = () => {
//     console.log(inputValue);
//   };
  
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          {/* to select year */}
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
            </div>
          </div>
          <Tabs defaultValue="chatbot" className="space-y-4">
            <TabsList>
              <TabsTrigger value="chatbot">
                AI
              </TabsTrigger>
              <TabsTrigger value="top10Brokers">
                Top 10 Brokers
              </TabsTrigger>
              <TabsTrigger value="analytics">
                Analytics
              </TabsTrigger>
              <TabsTrigger value="reports" disabled>
                Reports
              </TabsTrigger>
              <TabsTrigger value="notifications" disabled>
                Notifications
              </TabsTrigger>
            </TabsList>
            <TabsContent value="chatbot" className="space-y-4">
              <div className="grid grid-cols-6 gap-4">
                  <div className="cols-start-1 col-span-4 shadow-lg">
                    <Card className="grid col-span-1 rows-span-1 h-full">
                      <CardHeader>
                        <CardTitle>Ask AI</CardTitle>
                      </CardHeader>
                      <div className="h-full">
                        <CardContent>
                          <ChatComponent />
                        </CardContent>
                      </div>
                    </Card>
                  </div>
              </div>
            </TabsContent>
            <TabsContent value="top10Brokers" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
                {/* Top10 Brokers Table */}
                <Top10Brokers/>
                {/* <Card className=" grid col-span-2">
                  <CardHeader>
                    <CardTitle>Ask AI</CardTitle>
                  </CardHeader>
                  <CardContent> */}
                    {/* <BotResponseArea /> */}
                    {/* <QueryAreaWithButton /> */}
                    {/* <input
                      type="text"
                      placeholder="What do you want to know?"
                      value={inputValue}
                      onChange={handleChatInputChange}
                    />
                    <button onClick={handleChatSubmitClick}>Send</button>  */}
                    {/* <ChatQuery /> */}
                    {/* <ChatComponent />
                  </CardContent>
                </Card> */}
              </div>
            </TabsContent>
            <TabsContent value="analytics" className="space-y-4">
              <div className="grid gap-1 md:grid-cols-1 lg:grid-cols-1">
                <Card>
                  <CardHeader>
                  <CardTitle>Cumulative Premium for 2021 & 2022</CardTitle>
                    <CardContent>
                      {/* <Chart /> */}
                      <TotalGWPAndPlannedGWPChart />
                    </CardContent>
                  </CardHeader>
                  {/* <Chart/> */}
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Broker Share in GWP</CardTitle>
                  </CardHeader>
                    <CardContent>
                      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-4">
                        <div className="col-span-1">
                          <Card>
                            <CardHeader>
                              <CardTitle>2021</CardTitle>
                            </CardHeader>
                            <CardContent>
                              {/* Pie chart 2021 */}
                              <PieChart2021 />
                            </CardContent>
                          </Card>
                        </div>
                        <div>  
                          <Card>
                            <CardHeader>
                              <CardTitle>2022</CardTitle>
                            </CardHeader>
                            <CardContent>
                              {/* Pie Chart 2022 */}
                              <PieChart2022 />
                            </CardContent>
                          </Card>
                        </div>
                      </div>  
                    </CardContent>

                  {/* <Chart/> */}
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      Broker
                    </CardTitle>
                  </CardHeader>
                  {/* <CardContent>

                  </CardContent> */}
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}
