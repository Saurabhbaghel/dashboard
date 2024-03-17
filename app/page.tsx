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
        {/* <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <TeamSwitcher />
            <MainNav className="mx-6" />
            <div className="ml-auto flex items-center space-x-4">
              <Search /> 
              <UserNav />
            </div> 
          </div>
        </div> */}
        <div className="flex-1 space-y-4 p-8 pt-6">
          {/* to select year */}
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
              {/* <CalendarDateRangePicker />
              <Button>Download</Button> */}
              {/* <YearSelect /> */}
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
              <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
                  <Card className="col-span-2">
                    <CardHeader>
                      <CardTitle>Ask AI</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ChatComponent />
                    </CardContent>
                  </Card>
              </div>
            </TabsContent>
            <TabsContent value="top10Brokers" className="space-y-4">
              {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Revenue
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Subscriptions
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+2350</div>
                    <p className="text-xs text-muted-foreground">
                      +180.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Sales</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+12,234</div>
                    <p className="text-xs text-muted-foreground">
                      +19% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Active Now
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-xs text-muted-foreground">
                      +201 since last hour
                    </p>
                  </CardContent>
                </Card>
              </div> */}
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
                
                {/* Top10 Brokers Table */}
                <Top10Brokers/>

                <Card className="col-span-2">
                  <CardHeader>
                    <CardTitle>Ask AI</CardTitle>
                  </CardHeader>
                  <CardContent>
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
                    <ChatComponent />
                  </CardContent>
                </Card>
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
                    <CardTitle>Broker Share</CardTitle>
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
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}
